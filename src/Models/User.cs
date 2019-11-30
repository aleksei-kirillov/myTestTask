using myTestTask;
using myTestTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myTestTask.Models
{
  using Microsoft.Azure.Documents;
  using Newtonsoft.Json;

  public class User
  {
    [JsonProperty(PropertyName = "userName")]
    public string UserName { get; set; }

    [JsonProperty(PropertyName = "password")]
    public string Password { get; set; }

    [JsonProperty(PropertyName = "activeToken")]
    public string ActiveToken { get; set; }
    public override string ToString()
    {
      return JsonConvert.SerializeObject(this);
    }
  }
}

public class TokenProvider
{
  static public string GetToken(string userName, string password)
  {
    // i will NEVER do something like this in real app, but here i just need to get something that LOOKS like token in cheapest way
    byte[] time = BitConverter.GetBytes(DateTime.UtcNow.ToBinary());
    byte[] key = Guid.NewGuid().ToByteArray();

    // even in mockup here should go encryption... but...
    // HereWasSomeEncryption()
    return Uri.EscapeUriString(Convert.ToBase64String(time.Concat(key).ToArray()));
  }

  static public bool CheckToken(string token)
  {
    byte[] data = Convert.FromBase64String(token);
    DateTime when = DateTime.FromBinary(BitConverter.ToInt64(data, 0));
    if (when < DateTime.UtcNow.AddHours(-24))
    {
      return false;
    }

    return true;
  }
}
public class UserManager
{
  public static async Task<string> GetToken(string userName, string password)
  {
    // on real system here should be something like OAuth2 or some proper token generation, 
    // but since this is test task, getting token with simulation of encryption of username/password and some salt in it - is good enough
    string newToken = TokenProvider.GetToken(userName, password);
    IEnumerable<User> users = await DocumentDBRepository<User>.GetItemsAsync(d => d.UserName == userName);

    if (users.Count() == 0)
    {
      User user = new User { UserName = userName, ActiveToken = newToken, Password = password };
      DocumentDBRepository<User>.CreateItemAsync(user).Wait();
    }
    else
    {
      User user = users.First();

      // yes, i should save & check some hash, MD5 or something here, but i did skip this part; let's pretend there's some code for it?
      if (user.Password != password)
        return null;


      // token expired? let's update!
      if (!TokenProvider.CheckToken(user.ActiveToken))
      {
        user.ActiveToken = newToken;
        DocumentDBRepository<User>.UpdateItemAsync(user.UserName, user).Wait();
      }
      else
        return user.ActiveToken;
    }

    return newToken;
  }

  public static async Task<string> GetUser(string token)
  {
    IEnumerable<User> users = await DocumentDBRepository<User>.GetItemsAsync(d => d.ActiveToken == token);
    if(users.Count() != 0)
      return users.First().UserName;

    return null;
  }
}