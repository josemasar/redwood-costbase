// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import IdeasLayout from 'src/layouts/IdeasLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/admin" page={AdminPage} name="/admin" />
      <Set wrap={IdeasLayout}>
        <Route path="/admin/ideas/new" page={IdeaNewIdeaPage} name="newIdea" />
        <Route path="/admin/ideas/{id:Int}/edit" page={IdeaEditIdeaPage} name="editIdea" />
        <Route path="/admin/ideas/{id:Int}" page={IdeaIdeaPage} name="idea" />
        <Route path="/admin/ideas" page={IdeaIdeasPage} name="ideas" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
