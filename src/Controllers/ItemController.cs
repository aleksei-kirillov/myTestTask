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
    public async Task<JsonResult> IndexAsync(string token)
    {
      IEnumerable<Item> items = new List<Item>();
      string userName = await UserManager.GetUser(token);
      if (userName == null)
        return Json(new { items }, JsonRequestBehavior.AllowGet);

      items = await DocumentDBRepository<Item>.GetItemsAsync(d => d.user == userName);

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
    public async Task<ActionResult> CreateAsync([Bind(Include = "id,link,name,description,summary,episodes")] Item item, string token)
    {
      if (ModelState.IsValid)
      {
        string userName = await UserManager.GetUser(token);
        if (userName == null)
          return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

        item.user = userName;
        if (item.episodes == null)
          item.episodes = new Episode[0];
        await DocumentDBRepository<Item>.CreateItemAsync(item);
        return Json(new { userName }, JsonRequestBehavior.AllowGet);
      }

      return Json(new { error = "fail" }, JsonRequestBehavior.AllowGet);
    }

    //[HttpPut]
    [HttpPost]
    [ActionName("Edit")]
    public async Task<ActionResult> EditAsync([Bind(Include = "id,link,name,description,summary,episodes")] Item item, string token)
    {
      if (ModelState.IsValid)
      {
        string userName = await UserManager.GetUser(token);
        if (userName == null)
          return Json(new { error = "invalid user" }, JsonRequestBehavior.AllowGet);

        item.user = userName;

        await DocumentDBRepository<Item>.UpdateItemAsync(item.id, item);
        return Json(new { userName }, JsonRequestBehavior.AllowGet);
      }

      return Json(new { error = "fail" }, JsonRequestBehavior.AllowGet);
    }

//    [HttpDelete]
    [HttpPost]
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