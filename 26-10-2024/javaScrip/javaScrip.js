
class titulosElprofebarrientos extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {    
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: green;
                    border-radius: 8px;
                    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    width: 1720px; 
                    font-size: 1.0em;
                    color: #ffffff;
                    margin: 0 auto;
                    text-align: center;
                    font-weight: bold;
                    font-family: Arial, sans-serif;
                }
            </style>
            <div>Derechos reservados El profe barrientos</div>
        `;
    }
}
customElements.define("titulos-elprofebarrientos", titulosElprofebarrientos);


class LinkChatGPT extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                a {
                    font-size: 1.0em;
                    color: #007bff;
                    text-decoration: none;
                    cursor: pointer;
                
                }
            </style>
            <a href="https://chat.openai.com" target="_blank">Ir a ChatGPT</a>
        `;
    }
}
customElements.define("link-chatgpt", LinkChatGPT);

class FechaHoy extends HTMLElement {
    constructor() {
        super();  
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                div {
                    font-size: 20px;
                    color: blue;
                }
            </style>
            <div>${this.fecha()}</div>
        `;
    }

    fecha() {
        const today = new Date();
        const dia = String(today.getDate()).padStart(2, '0');
        const mes = String(today.getMonth() + 1).padStart(2, '0');
        const ano = today.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }
}
customElements.define("fecha-hoy", FechaHoy);


class HoraActual extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        
        this.actualizarHora();
        
        this.intervalo = setInterval(() => this.actualizarHora(), 1000);
    }

    disconnectedCallback() {
        
        clearInterval(this.intervalo);
    }

    actualizarHora() {
        const now = new Date();
        const hora = String(now.getHours()).padStart(2, '0');
        const minuto = String(now.getMinutes()).padStart(2, '0');
        const segundo = String(now.getSeconds()).padStart(2, '0');
        
        
        this.shadowRoot.innerHTML = `
       
            <style>
                div {
                
                    font-size: 20px;
                    color: blue;
                }
            </style>
            <div>Bienvenido la hora es: ${hora}:${minuto}:${segundo}</div>
        `;
    }
}

customElements.define("hora-actual", HoraActual);

class BuscarConChatGPT extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        let shadow = this.attachShadow({ mode: "open" });

        
        const buscarcaja = document.createElement("input");
        buscarcaja.type = 'text';
        buscarcaja.name = 'buscar';
        buscarcaja.id = 'buscar';
        buscarcaja.placeholder = 'Buscar con ChatGPT';

        
        buscarcaja.classList.add("buscarcaja");

        
        const style = document.createElement("style");
        style.textContent = `
            .buscarcaja {     
                width: 99%;             /* Ancho de la caja de texto */
                padding: 10px;            /* Espaciado interno */
                border: 2px solid #007bff; /* Color y grosor del borde */
                border-radius: 20px;      /* Esquinas redondeadas */
                outline: none;            /* Quitar el contorno al hacer clic */
                transition: border-color 0.3s; /* Transición suave para el color del borde */
            }
            .buscarcaja:focus {
                border-color: #CD5C5C;  /* Color del borde al enfocar */
            }
        `;

        
        shadow.appendChild(style);   
        shadow.appendChild(buscarcaja);
    }
}


customElements.define("buscar-con-chatgpt", BuscarConChatGPT);

class BotonCarrito extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
            <style>
                button {
                    font-size: 1.0em;
                    color: #ffffff;
                    background-color: #007bff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                }
            </style>
            <button onclick="window.location.href='/carrito'">Ir al Carrito</button>
        `;
    }
}
customElements.define("boton-carrito", BotonCarrito);