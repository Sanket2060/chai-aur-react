#React router by a project

1.Link and navlink:
Link: The <Link> component is used to navigate between different routes in your React application. 
It's similar to using an <a> tag in HTML but has the advantage of not causing a full page refresh when you click it.
Instead, it updates the URL and renders the appropriate component for the new route.

NavLink: <NavLink> is a special version of <Link> that is often used for navigation menus. It allows you to apply specific styles to the active link (e.g., changing the color) to indicate the currently active route.
You can use the isActive prop with <NavLink> to determine if the link is currently active


2.Outlet in react-router-dom
<Outlet />: This is a React Router component that acts as a placeholder for rendering child routes. 
In your layout, you have placed the <Outlet /> between the <Header /> and <Footer /> components. 
Any child routes specified in your routing configuration will be rendered inside this outlet.


2.ReactProvider,CreatebrowserRouter,Routes and Route
->Used for creating router configuration.

3.Useparams from react-router-dom
->Take data from the link foreg. https://localhost/user/:userid
->userid value can be accessed using useparams on the component in which /user/ directs to.
->Most websites have same ui but based on these params like userid the main content changes.Even
on fb,insta,etc.

4.Magic of Loader inside react-router
    Prefetching Content:
        When you use a loader with a route in React Router, it allows you to load the associated component and any required data asynchronously.
        This prefetching typically happens when a user hovers over or focuses on a link or element associated with a specific route (e.g., a navigation link or button).
        React Router starts fetching the component and data in the background, so it's ready when the user actually clicks the link.

    Reducing Perceived Lag:
        By prefetching the content, React Router can significantly reduce the perceived lag when transitioning between routes.
        When a user clicks the link, the content is already available, so the route change happens more quickly.

    Caching:
        React Router often utilizes caching to store fetched data and components to avoid redundant requests.
        If the same route is accessed again in the future, React Router can use the cached data and components, further improving performance.

    Data Availability:
        If the route relies on data fetched from an API or a server, the loader helps ensure that the data is available before rendering the component.
        This prevents potential issues where the component tries to render with missing or incomplete data.

    Route Activation:
        The actual route activation (i.e., rendering the component and transitioning to the new route) occurs only when the user clicks the link or element.
        This ensures that the user sees the most up-to-date content when they navigate to a new route.




5.Link and navlink v/s Defining Routes
->In both cases we are using links displayed on top of browser.In link/navlink we use to define
for which link(like <a> tag),where should the link/navlink direct it to.But Defining routes
actually defines what happens for which link(/about) and which component loads.It takes helps 
from <outlet/>.
So link and navlink are just using the feature while ReactProvider and routes actually define 
the routes(attaching links to components.)


Chatgpt link for better understanding:https://chat.openai.com/share/c3f5efc4-eee7-4e83-bfa7-e28c977f1feb

Note:exporting by starting to  export  components first to index.js and then exporting index.js provides 
manageability at the importing main file when a large number of files is to be imported.
