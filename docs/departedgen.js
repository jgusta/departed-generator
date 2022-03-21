export const DepartedGen = (function (data) {
  const getLorem = (lines) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    let text = "";
    for (let i = 0; i < lines; i++) {
      text = `${shuffled[i]} ${text}`;
    }
    return text;
  };
  const stick = (outer, inner) => {
    outer.appendChild(inner);
  };

  const getP = (n) => {
    let elm = document.createElement("p");
    stick(elm, document.createTextNode(getLorem(n)));
    return elm;
  };

  const titleCase = (str) => {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };
  const gen = () => {
    const currentDiv = document.getElementById("text");
    currentDiv.innerHTML = "";
    let titleText = "";
    while (titleText.length < 20) {
      titleText = getLorem(1);
    }
    let title = document.createElement("h2");
    stick(title, document.createTextNode(titleCase(titleText)));
    stick(currentDiv, title);
    stick(currentDiv, getP(3));
    stick(currentDiv, getP(6));
    stick(currentDiv, getP(4));
    stick(currentDiv, getP(1));
    stick(currentDiv, getP(6));
  };

  const go = document.getElementById("go");
  go.onclick = gen;
  gen();
})
