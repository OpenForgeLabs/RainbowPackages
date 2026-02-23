import { cn } from "../utils/cn";

export type VariantDefinitions = Record<string, Record<string, string>>;

export type VariantSelection<V extends VariantDefinitions> = {
  [K in keyof V]?: keyof V[K];
};

export type CompoundVariant<V extends VariantDefinitions> =
  VariantSelection<V> & {
    className: string;
  };

export type RecipeConfig<V extends VariantDefinitions> = {
  base?: string;
  variants?: V;
  defaultVariants?: VariantSelection<V>;
  compoundVariants?: Array<CompoundVariant<V>>;
};

export type RecipeProps<V extends VariantDefinitions> = VariantSelection<V> & {
  className?: string;
};

export function recipe<V extends VariantDefinitions>(config: RecipeConfig<V>) {
  return (props: RecipeProps<V> = {} as RecipeProps<V>): string => {
    const variants = config.variants ?? ({} as V);
    const selected: Record<string, string | undefined> = {};

    for (const variantName of Object.keys(variants)) {
      const value =
        (props as Record<string, string | undefined>)[variantName] ??
        (config.defaultVariants as
          | Record<string, string | undefined>
          | undefined)?.[variantName];
      selected[variantName] = value;
    }

    const variantClasses = Object.entries(variants).map(
      ([variantName, options]) => {
        const value = selected[variantName];
        if (!value) {
          return "";
        }
        return options[value] ?? "";
      },
    );

    const compoundClasses = (config.compoundVariants ?? [])
      .filter((compound) => {
        for (const [key, value] of Object.entries(compound)) {
          if (key === "className") {
            continue;
          }
          if (selected[key] !== value) {
            return false;
          }
        }
        return true;
      })
      .map((compound) => compound.className);

    return cn(config.base, ...variantClasses, ...compoundClasses, props.className);
  };
}
