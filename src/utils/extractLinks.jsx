function extractLinks(inputString){
   //Identify Links with help of regex
   const urlRegex = /(https?:\/\/[^\s]+)/g;  
   
   //Array to hold the found links
   const linksArray = [];

   //Replacing the URLs with the desired HTML structure
   const modifiedString = inputString.replace(urlRegex,(url)=>{
      const urlObject = new URL(url) 
      const domine = urlObject.hostname;
      linksArray.push(url)   
      return `<span class="text-blue-900 underline"><a href=${url} target="_blank">${domine}</a></span>`          
   });

   return{
      originalString:modifiedString,
      links:linksArray              
   }
}
export default extractLinks;