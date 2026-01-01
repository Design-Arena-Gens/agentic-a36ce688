export function cn(...inputs: Array<string | undefined | false | null | Record<string, boolean>>) {
  const classNames: string[] = [];

  inputs.forEach((input) => {
    if (!input) return;

    if (typeof input === "string") {
      classNames.push(input);
      return;
    }

    Object.entries(input).forEach(([key, value]) => {
      if (value) classNames.push(key);
    });
  });

  return classNames.join(" ");
}
