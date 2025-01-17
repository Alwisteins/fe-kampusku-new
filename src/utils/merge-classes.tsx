/**
 * Utility function to merge default classes with user-provided classes.
 * If there are duplicates, the user-provided class takes precedence.
 */
export const mergeClasses = (
  defaultClass: string,
  userClass?: string,
): string => {
  const defaultClasses = new Set(defaultClass.split(" "));
  const userClasses = new Set(userClass?.split(" ") || []);

  // Remove duplicates from default classes if they exist in user classes
  userClasses.forEach((cls) => defaultClasses.delete(cls));

  return [...defaultClasses, ...userClasses].join(" ");
};
