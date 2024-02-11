export default class Ticket {
    constructor(id, name, status, description, created) {
      this.id = id,
      this.name = name,
      this.status = status,
      this.description = description,
      this.created = created
    }
  
  
  }
  
  const addTicket = document.querySelector('.addTicket');
  
  async function loadResponse() {
    return (await fetch("http://localhost:7070")).json();
  }
  
  
  async function load1() {
    const response = await fetch("http://localhost:7070");
    const result = await response.json();
  
    console.log(JSON.stringify(result));
  }
  
  addTicket.addEventListener('click', async () => {
    let result = [];
  
    try {
      result = await loadResponse();
    } catch (e) {
      console.log(e);
    }
  
    console.log(result);
  })
  
  
  const subscibeForm = document.querySelector('.subscribe-form');
  
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const xhr = new XMLHttpRequest();
  
    const body = Array.from(subscribeForm.elements)
      .filter(({ name }) => name)
      .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
      .join('&');
  
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
      console.log(xhr.responseText);
    }
  
    xhr.open('POST', 'http://localhost:7070');
  
    xhr.send(body);
  })
  
  
  