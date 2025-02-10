const generateBTN = document.getElementById("generateBTN")
const displayPass = document.getElementById("newPassword")
const passwordText = document.querySelector(".passwordText")

async function generatedPassword(length) {
   try {
      const url = `https://api.genratr.com/?length=${length}&uppercase&lowercase&special&numbers`;
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
      return result.password;
   } catch (error) {
      console.error(error);
      alert("An error occurred while generating the password.");
   }
}


generateBTN.addEventListener('click', async () => {
   const length = document.getElementById("length").value;

   const password = await generatedPassword(length);
   // console.log(password)
   displayPass.textContent = password.toString();
   passwordText.style.display = 'block';
})
