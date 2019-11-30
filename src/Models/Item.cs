namespace myTestTask.Models
{
    using Microsoft.Azure.Documents;
    using Newtonsoft.Json;

  public class Episode
  {
    [JsonProperty(PropertyName = "episode")]
    public string EpisodeId { get; set; }

    [JsonProperty(PropertyName = "description")]
    public string Description { get; set; }
    [JsonProperty(PropertyName = "viewed")]
    public bool Viewed { get; set; }
  }

  public class Item
  {
    [JsonProperty(PropertyName = "id")]
    public string Id { get; set; }

    [JsonProperty(PropertyName = "link")]
    public string Link { get; set; }

    [JsonProperty(PropertyName = "user")]
    public string User { get; set; }

    [JsonProperty(PropertyName = "name")]
    public string Name { get; set; }

    [JsonProperty(PropertyName = "summary")]
    public string Summary { get; set; }

    [JsonProperty(PropertyName = "lastSeason")]
    public string LastSeason { get; set; }

    [JsonProperty(PropertyName = "lastEpisode")]
    public string LastEpisode { get; set; }

    [JsonProperty(PropertyName = "episodes")]
    public Episode[] Episodes { get; set; }
    public override string ToString()
    {
      return JsonConvert.SerializeObject(this);
    }
  }
}