

const generateBTN = document.getElementById("generateBTN")
const displayPass = document.getElementById("newPassword")
const passwordText = document.getElementById("passwordText")

async function generatedPassword(length) {
   try {
      const url = `https://password-generator-v2.p.rapidapi.com/api/password-generator?length=${length}`;
      const options = {
         method: 'GET',
         headers: {
            'x-rapidapi-key': 'ec4737504dmsh7455d0fcde0cf6dp129731jsn111278f68141',
            'x-rapidapi-host': 'password-generator-v2.p.rapidapi.com'
         }
      };

      const response = await fetch(url, options);

      if (response.status === 429) {
         alert("Too many requests! Please try again later.");
         return null;
      }

      if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      return result['generated-password'];
   } catch (error) {
      console.error(error);
      alert("An error occurred while generating the password.");
   }
}


generateBTN.addEventListener('click', () => {
   const length = document.getElementById("length").value;

   const password = generatedPassword(length);
   displayPass.textContent = password;
   passwordText.style.display = 'block';
})
