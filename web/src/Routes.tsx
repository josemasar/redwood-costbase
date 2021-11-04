// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import IdeasLayout from 'src/layouts/IdeasLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="login">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Set wrap={IdeasLayout}>
          <Route path="/dashboard/ideas/new" page={IdeaNewIdeaPage} name="newIdea" />
          <Route path="/dashboard/ideas/{id:Int}/edit" page={IdeaEditIdeaPage} name="editIdea" />
          <Route path="/dashboard/ideas/{id:Int}" page={IdeaIdeaPage} name="idea" />
          <Route path="/dashboard/ideas" page={IdeaIdeasPage} name="ideas" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
