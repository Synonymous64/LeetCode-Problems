const copyToClipboard = (Text) => navigator.clipboard?.writeText && navigator.clipboard.writeText(Text);
// *testing 
copyToClipboard("Myself Prajwal");
