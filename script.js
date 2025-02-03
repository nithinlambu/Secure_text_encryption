
    <script>
        let secretKey;

        function generateKey() {
            secretKey = CryptoJS.lib.WordArray.random(32).toString();
            document.getElementById("secretKey").value = secretKey;
        }

        function encryptText() {
            const inputText = document.getElementById("inputText").value;
            secretKey = document.getElementById("secretKey").value;
            if (!secretKey) {
                alert("Please enter or generate a secret key.");
                return;
            }
            const encrypted = CryptoJS.AES.encrypt(inputText, secretKey).toString();
            document.getElementById("result").textContent = "Encrypted: " + encrypted;
            document.getElementById("result").classList.add("animated-text");
        }

        function decryptText() {
            const inputText = document.getElementById("inputText").value;
            secretKey = document.getElementById("secretKey").value;
            if (!secretKey) {
                alert("Please enter or generate a secret key.");
                return;
            }
            try {
                const decrypted = CryptoJS.AES.decrypt(inputText, secretKey).toString(CryptoJS.enc.Utf8);
                document.getElementById("result").textContent = "Decrypted: " + decrypted;
                document.getElementById("result").classList.add("animated-text");
            } catch (error) {
                document.getElementById("result").textContent = "Decryption failed. Incorrect key or corrupted data.";
            }
        }
    </script>