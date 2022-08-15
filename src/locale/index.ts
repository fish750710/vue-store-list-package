export const messages = {
  'zh-TW': require('./lang/zh-TW.json'),
  'en-US': require('./lang/en-US.json')
};

// 物件尋找key
function hasOwn(obj: any, key: string) {
  return window.hasOwnProperty.call(obj, key);
}

// 處理 args
function format(str: string, ...args: any) {
  if (args.length === 1 && typeof args[0] === 'object') {
    args = args[0];
  }
  if (!args || !args.hasOwnProperty) {
    args = {};
  }
  return str.replace(/(%|)\{([0-9a-zA-Z_]+)\}/g, (match, prefix, i, index) => {
    if (str[index - 1] === '{' && str[index + match.length] === '}') {
      return i;
    } else {
      const result = hasOwn(args, i) ? args[i] : null;
      if (result === null || result === undefined) {
        return '';
      }
      return result;
    }
  });
}

export const translate = (path: string, locale: string = 'zh-TW', ...args: any): string => {
  try {
    const value = (messages as any)[locale]?.[path] ?? messages['zh-TW']?.[path] ?? '';
    if (!value) {
      return path;
    }
    return format(value, ...args);
  } catch (error) {
    return path;
  }
};
