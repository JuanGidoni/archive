import FormToAddProject from "../../Organisms/FormToAddProject"

const PanelAddProject = ({user, config}) => {
 return (
  user && user.uid === process.env.REACT_APP_adminId ? 
   <div className="home-page">
    <h2>{config.pagecontents.panel.project.add.text}</h2>
    <FormToAddProject 
      formTexts={config.pagecontents.panel.project.form}
      buttonText={config.pagecontents.panel.project.add.button}
      user={user}
    />
   </div> : config.errors.perms
 )
}

const PanelDeleteProject = ({user, config}) => {
  return (
   user && user.uid === process.env.REACT_APP_adminId ? 
    <div className="home-page">
     <h2>{config.pagecontents.panel.project.add.text}</h2>
     <FormToAddProject 
       formTexts={config.pagecontents.panel.project.form}
       buttonText={config.pagecontents.panel.project.add.button}
       user={user}
     />
    </div> : config.errors.perms
  )
 }

 const PanelEditProject = ({user, config}) => {
  return (
   user && user.uid === process.env.REACT_APP_adminId ? 
    <div className="home-page">
     <h2>{config.pagecontents.panel.project.add.text}</h2>
     <FormToAddProject 
       formTexts={config.pagecontents.panel.project.form}
       buttonText={config.pagecontents.panel.project.add.button}
       user={user}
     />
    </div> : config.errors.perms
  )
 }

export {
  PanelAddProject,
  PanelDeleteProject,
  PanelEditProject,
} 
