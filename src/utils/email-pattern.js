const getEmailPattern = () => /^(\d|\w*)(?=)(@[^\d]*)(\.\w{3,4})$/g;

export default getEmailPattern;
