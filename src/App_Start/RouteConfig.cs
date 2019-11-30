namespace myTestTask
{
    using System.Web.Mvc;
    using System.Web.Routing;

    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{token}/{id}",
                defaults: new { controller = "Home", action = "Home", token = UrlParameter.Optional, id = UrlParameter.Optional });
        }
    }
}
