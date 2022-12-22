const removeSlashFromUserName = (text) => {
  if (text.startsWith('/u/')) {
    return text.substring(3);
  }
  return text;
};

export default removeSlashFromUserName;
