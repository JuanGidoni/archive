const en = {
  pagecontents: {
    panel: {
      welcome: "Welcome",
      title: "Admin Dashboard",
      buttons: {
        add: "Add",
        edit: "Edit",
        delete: "Delete",
        upload: "Upload"
      },
      project: {
        form: {
          title: "Project Title",
          description: "Project Description",
          company: "Project Company",
          role: "Project Role",
          techs: "Project Technologies",
        },
        add: {
          button: "Add Project",
          text: "Complete this form to add a project"
        },
        delete: {
          button: 'Delete Project',
          text: 'Complete this form to delete a project'
        },
        edit: {
          button: 'Edit Project',
          text: 'Complete this form to edit a project'
        }
      },
      blog: {
        form: {
          title: "Post Title",
          description: "Post Description",
          subject: "Post Subject",
          message: "Post Message",
        },
        add: {
          button: "Add Post",
          text: "Complete this form to add a blog post"
        },
        delete: {
          button: 'Delete Post',
          text: 'Complete this form to delete a blog post'
        },
        edit: {
          button: 'Edit Post',
          text: 'Complete this form to edit a blog post'
        }
      },
      user: {
        form: {
          title: "User Full Name",
          role: "User Specific Role",
          picture: "User Picture",
        },
        add: {
          button: "Add Public User",
          text: "Complete this form to add Public User"
        },
        delete: {
          button: 'Delete Public User',
          text: 'Complete this form to delete a Public User'
        },
        edit: {
          button: 'Edit Public User',
          text: 'Complete this form to edit a Public User'
        }
      },
    }
  },
  menu: [{
      text: 'Resume',
      where: ''
    },
    {
      text: 'Projects',
      where: 'projects'
    },
    {
      text: 'Blog',
      where: 'blog'
    },
    {
      text: 'Contact',
      where: 'contact'
    },
    {
      text: 'Login',
      where: 'login'
    },
    {
      text: 'Logout',
      where: 'logout'
    }
  ],
  websiteSlogan: "Welcome to my portfolio.",
  author: {
    name: 'Juan Ignacio Gidoni',
    role: "Fullstack Developer & Multimedia Designer",
    age: 25,
    hobbies: "Basketball, Cooking, Gaming and Movies/TV Series",
    skills: [
      "React JS", "HTML", "CSS", "Javascript", "Photoshop", "Ilustrator", "After Effects",
      "Docker", "NodeJS", "ExpressJS", "Atomic Design", "Frontend Developer", "English", "Spanish"
    ],
    biography: "Full biography here..."
  },
  year: 2021,
  linkedin: 'https://www.linkedin.com/in/juangidoni/',
  errors: {
    notfound: "Error, this page isn't exist or not found. 404",
    notexist: "Error, this content isn't exist or has an error. 404",
    empty: "This content is empty... please try again later.",
    perms: "You don't have permission to be here..."
  }
}

const es = {
  pagecontents: {
    panel: {
      welcome: "Bienvenido",
      title: "Panel de administraci??n",
      buttons: {
        add: "Agregar",
        edit: "Editar",
        delete: "Borrar",
        upload: "Subir"
      },
      project: {
        form: {
          title: "Titulo del proyecto",
          description: "Descripcion del proyecto",
          company: "Empresa del proyecto",
          role: "Role que llevaste a cabo",
          techs: "Tecnologias usadas",
        },
        add: {
          button: "Agregar Proyecto",
          text: "Complete este formulario para agregar un proyecto"
        },
        delete: {
          button: 'Borrar Proyecto',
          text: "Complete este formulario para borrar un proyecto"
        },
        edit: {
          button: 'Editar Proyecto',
          text: "Complete este formulario para editar un proyecto"
        }
      },
      blog: {
        form: {
          title: "Titulo del Post",
          description: "Descripcion del Post",
          subject: "Tema del Post",
          message: "Mensaje del Post",
        },
        add: {
          button: "Agregar Post",
          text: "Complete este formulario para agregar un post"
        },
        delete: {
          button: 'Borrar Post',
          text: "Complete este formulario para borrar un post"
        },
        edit: {
          button: 'Editar Post',
          text: "Complete este formulario para editar un post"
        }
      },
      user: {
        form: {
          title: "Nombre Completo del Usuario",
          role: "Rol especifico del Usuario",
          picture: "Foto del Usuario",
        },
        add: {
          button: "Agregar un Usuario Publico",
          text: "Complete este formulario para agregar un Usuario Publico"
        },
        delete: {
          button: 'Borrar un Usuario Publico',
          text: 'Complete este formulario para borrar a un Usuario Publico'
        },
        edit: {
          button: 'Editar un Usuario Publico',
          text: 'Complete este formulario para editar a un Usuario Publico'
        }
      },
    }
  },
  menu: [{
      text: 'Curriculum',
      where: ''
    },
    {
      text: 'Proyectos',
      where: 'projects'
    },
    {
      text: 'Blog',
      where: 'blog'
    },
    {
      text: 'Contacto',
      where: 'contact'
    },
    {
      text: 'Iniciar Sesion',
      where: 'login'
    },
    {
      text: 'Salir',
      where: 'logout'
    }
  ],
  websiteSlogan: "Bienvenido a mi portfolio.",
  author: {
    name: 'Juan Ignacio Gidoni',
    role: "Desarrollador Fullstack y Dise??ador Multimedia",
    age: 25,
    hobbies: "Basquet, Cocinar, Gaming, Peliculas y Series",
    skills: [
      "React JS", "HTML", "CSS", "Javascript", "Photoshop", "Ilustrator", "After Effects",
      "Docker", "NodeJS", "ExpressJS", "Atomic Design", "Frontend Developer", "English", "Spanish"
    ],
    biography: "Mi biografia completa..."
  },
  year: 2021,
  linkedin: 'https://www.linkedin.com/in/juangidoni/',
  errors: {
    notfound: "Error, esta pagina no existe o no funciona. 404",
    notexist: "Error, este contenido no existe o tiene un error. 404",
    empty: "Este contenido esta vacio, por favor intente mas tarde.",
    perms: "No tienes permiso para estar aqui..."
  }
}

export {
  en,
  es
}