namespace myTestTask.Models
{
    using Microsoft.Azure.Documents;
    using Newtonsoft.Json;

  public class Episode
  {
    public string episodeId { get; set; }
    public string description { get; set; }
    public bool viewed { get; set; }
  }

  public class Item
  {
    public string id { get; set; }

    public string link { get; set; }

    public string user { get; set; }

    public string name { get; set; }

    public string summary { get; set; }

    public string lastSeason { get; set; }

    public string lastEpisode { get; set; }

    public Episode[] episodes { get; set; }
    public override string ToString()
    {
      return JsonConvert.SerializeObject(this);
    }
  }
}