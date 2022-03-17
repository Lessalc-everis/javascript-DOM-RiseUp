const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("form button");
const ulElement = document.querySelector("ul");

//const task = [];

//Queremos fazer algo sempre que o button é clicado. Vamos criar um evento para isso


// Trabalhar com lista nesse caso tem um problema, toda vez teríamos que renderizar toda a 
// página para adicionar um item. Não é o que queremos, vamos perder performance assim.
// Logo a melhor opção é renderizar apenas o que foi alterado. 

// buttonElement.onclick = ev => {
//     ev.preventDefault(); // Evitar q o evento default, recarregar página, aconteça
//     //console.log(inputElement.value);
//     if(inputElement.value){
//         task.push(inputElement.value);
//         console.log(task);
//         inputElement.value = "";
//     }
// }
buttonElement.onclick = ev => {
    ev.preventDefault();
    if(inputElement.value){
        // Criamos o elemento Span que é onde iremos inserir a tarefa
        const textElement = document.createElement("span");
        textElement.innerHTML = inputElement.value;

        // Criamos o elemeto button que fica ao lado da tarefa para remover
        const btnElement = document.createElement("button");
        btnElement.innerHTML = "Remover";

        // Criamos o elemento lista, que adiciona um span com a tarefa e um button de remover
        const liElement = document.createElement("li");
        liElement.appendChild(textElement);
        liElement.appendChild(btnElement);

        btnElement.onclick = () =>{
            ulElement.removeChild(liElement);
        }

        // Por fim adicionamos todo elemento da lista ao nosso ulElemento, que pode já conter outros li
        ulElement.appendChild(liElement);
        inputElement.value = "";
    }
}

