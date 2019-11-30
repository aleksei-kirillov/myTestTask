using myTestTask;
using myTestTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace todo.Controllers
{


  public class UserController : Controller
  {
    [HttpPost]
    public async Task<JsonResult> GetToken(string userName, string password)
    {
      // on real system here should be something like OAuth2 or some proper token generation, 
      // but since this is test task, getting token with simple encryption of username/password and some salt in it - is good enough
      return new JsonResult
      {
        Data = new{token = await UserManager.GetToken(userName, password)},
        JsonRequestBehavior = JsonRequestBehavior.AllowGet
      };
    }
  }
}