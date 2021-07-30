window.onload = () => {
  // agregarTarea();
  getTareas();

  document.forms.agregarTarea.addEventListener('submit', event => {
    event.preventDefault();
    agregarTarea()
  });
}

comprobarToken();
setInterval(() => {
  comprobarToken();
}, 100000)

function comprobarToken() {
  const token = localStorage.getItem('token');
  if (!token) {
    location.href = './login.html'
  }
}

function crearTareas(tareas) {
  document.querySelector('ul.tareas-pendientes').innerHTML = '';
  document.querySelector('ul.tareas-terminadas').innerHTML = '';

  tareas.forEach(tarea => {
    renderizarTarea(tarea)
  })
}

function renderizarTarea(tarea) {
  const template = `
    <li class="tarea animar-entrada">
      <div class="not-done" onclick='completarTarea(${tarea.id}, ${tarea.completed})'></div>
      <div class="descripcion">
        <p class="nombre">${tarea.description}</p>
        <p class="timestamp">Creado el: ${tarea.createdAt}</p>
        <button class="eliminar"  onclick='eliminarTarea(${tarea.id})'>Eliminar</button>
      </div>
    </li>
  `;

  const contenedorTareas = document.querySelector('ul.tareas-pendientes');
  const contenedorTareasCompletas = document.querySelector('ul.tareas-terminadas');
  if (!tarea.completed) {
    contenedorTareas.innerHTML += template;
  } else {
    contenedorTareasCompletas.innerHTML += template;
  }
}

function agregarTarea() {
  const descripcion = document.forms.agregarTarea.descripcionNuevaTarea.value;
  const body = {
    description: descripcion,
    completed: false
  }

  RequestManager.post(`/tasks`, body)
    .then(tarea => {
      renderizarTarea(tarea);
    }).catch(err => {
      console.log(err);
    })
}

function getTareas() {
  RequestManager.get('/tasks').then(tareas => {
    crearTareas(tareas);
  })
}

function completarTarea(id, completed) {
  RequestManager.put(`/tasks/${id}`, { completed: !completed })
    .then(tarea => {
      getTareas();
    }).catch(err => {
      console.log(err)
    })
}

function eliminarTarea(id) {
  if (!confirm('Esta seguro que desea eliminar la tarea?')) {
    return;
  }

  RequestManager.delete(`/tasks/${id}`).then(tarea => {
    getTareas();
  }).catch(err => {
    console.log(err)
  })
}

