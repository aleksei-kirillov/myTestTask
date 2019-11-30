namespace myTestTask.Controllers
{
  using System.Net;
  using System.Threading.Tasks;
  using System.Web.Mvc;
  using Models;
  using System.Web.Helpers;
    using System.Linq;
    using System.Collections.Generic;

    public class ItemController : Controller
  {
    [ActionName("Index")]
    [Route("{user}")]
    public async Task<JsonResult> IndexAsync(string token)
    {
      IEnumerable<Item> items = new List<Item>();
      string userName = await UserManager.GetUser(token);
      if(userName == null)
        return Json(new { items }, JsonRequestBehavior.AllowGet);

      items = await DocumentDBRepository<Item>.GetItemsAsync(d => d.User == userName);

      return Json(new { items, userName }, JsonRequestBehavior.AllowGet);
    }

#pragma warning disable 1998
    [ActionName("Create")]
    public async Task<ActionResult> CreateAsync()
    {
      return Json(new { error = "not supported" }, JsonRequestBehavior.AllowGet);
    }
#pragma warning restore 1998

    [HttpPost]
    [ActionName("Create")]
    [ValidateAntiForgeryToken]
    public async Task<ActionResult> CreateAsync([Bind(Include = "Id,Link,Name,Description,Summary")] Item item, string token)
    {
      if (ModelState.IsValid)
      {
        string userName = await UserManager.GetUser(token);
        if (userName == null)
          return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

        item.User = userName;
        await DocumentDBRepository<Item>.CreateItemAsync(item);
        return Json(new { userName }, JsonRequestBehavior.AllowGet);
      }

      return Json(new { error = "fail" }, JsonRequestBehavior.AllowGet);
    }

    [HttpPost]
    [ActionName("Edit")]
    [ValidateAntiForgeryToken]
    public async Task<ActionResult> EditAsync([Bind(Include = "Id,Link,Name,Description,Summary")] Item item, string token)
    {
      if (ModelState.IsValid)
      {
        string userName = await UserManager.GetUser(token);
        if (userName == null)
          return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

        await DocumentDBRepository<Item>.UpdateItemAsync(item.Id, item);
        return Json(new { userName }, JsonRequestBehavior.AllowGet);
      }

      return Json(new { error = "fail" }, JsonRequestBehavior.AllowGet);
    }

    [ActionName("Edit")]
    public async Task<ActionResult> EditAsync(string id, string token)
    {
      if (id == null)
      {
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
      }

      string userName = await UserManager.GetUser(token);
      if (userName == null)
        return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

      Item item = await DocumentDBRepository<Item>.GetItemAsync(id);
      if (item == null)
      {
        return HttpNotFound();
      }
      await DocumentDBRepository<Item>.UpdateItemAsync(item.Id, item);
      return Json(new { userName }, JsonRequestBehavior.AllowGet);

      return View(item);
    }

    [ActionName("Delete")]
    public async Task<ActionResult> DeleteAsync(string id, string token)
    {
      string userName = await UserManager.GetUser(token);
      if (userName == null)
        return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

      if (id == null)
      {
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
      }

      Item item = await DocumentDBRepository<Item>.GetItemAsync(id);
      if (item == null)
      {
        return HttpNotFound();
      }

      return Json(new { userName }, JsonRequestBehavior.AllowGet);
    }

    [HttpPost]
    [ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<ActionResult> DeleteConfirmedAsync([Bind(Include = "Id")] string id, string token)
    {
      string userName = await UserManager.GetUser(token);
      if (userName == null)
        return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

      await DocumentDBRepository<Item>.DeleteItemAsync(id);
      return Json(new { userName }, JsonRequestBehavior.AllowGet);
    }

    [ActionName("Details")]
    public async Task<ActionResult> DetailsAsync(string id, string token)
    {
      string userName = await UserManager.GetUser(token);
      if (userName == null)
        return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

      Item item = await DocumentDBRepository<Item>.GetItemAsync(id);
      return Json(new { item, userName }, JsonRequestBehavior.AllowGet);
    }
  }
}