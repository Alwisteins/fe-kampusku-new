/**
 * Utility function to merge default classes with user-provided classes.
 * If there are duplicates, the user-provided class takes precedence.
 */
export const mergeClasses = (
  defaultClass: string,
  userClass?: string,
): string => {
  const defaultClasses = defaultClass.split(" ");
  const userClasses = userClass?.split(" ") || [];

  // remove default classes that are already in user classes
  const filteredDefaultClasses = defaultClasses.filter(
    (cls: string) =>
      !userClasses.some((userCls: string) =>
        userCls.startsWith(cls.split("-")[0]),
      ),
  );

  return [...filteredDefaultClasses, ...userClasses].join(" ");
};
