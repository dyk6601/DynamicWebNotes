/// Room Code Generation 
export const generateRoomCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};
/// Copy to Clipboard Function
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    return true;
  }
};

// Mock function for demo purposes
export const getRandomWordPair = (category, categories) => {
  const categoryWords = categories[category];
  if (!categoryWords || categoryWords.length === 0) {
    return { majority: 'Demo Word', minority: 'Demo Word' };
  }
  
  const randomPair = categoryWords[Math.floor(Math.random() * categoryWords.length)];
  return randomPair;
};