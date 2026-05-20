const SHORTENER_API = "https://e9nbilidtb.execute-api.us-east-1.amazonaws.com";

const REDIRECT_API = "https://pcdjpluvd4.execute-api.us-east-1.amazonaws.com";

async function shorten() {
  const url = document.getElementById("url").value;

  const response = await fetch(
    `${SHORTENER_API}/shorten`,

    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        url,
      }),
    },
  );

  const data = await response.json();

  const codigo = data.shortUrl.split("/").pop();

  const frontendUrl = `${window.location.origin}/short.html?codigo=${codigo}`;

  document.getElementById("result").innerHTML = `
<div class="result">

<input
value="${frontendUrl}"
readonly>

<button
onclick="copyLink('${frontendUrl}')">

Copiar

</button>

</div>
`;
}

function copyLink(url) {
  navigator.clipboard.writeText(url);

  alert("URL copiada");
}
