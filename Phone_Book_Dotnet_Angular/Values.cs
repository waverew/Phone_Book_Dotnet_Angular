using System.Text.Json;

namespace Phone_Book_Dotnet_Angular
{
    public class Values
    {

        public string Surname { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; } 
    }
    public class Program
    {
        public string phonebook = "./Controllers/Phonebook.json";
        public List<Values> Main()
        {
            using FileStream jsond = File.OpenRead(this.phonebook);
            var values = JsonSerializer.Deserialize<List<Values>>(jsond);
            for (int i = 0; i < values.Count; i++)
            {
                Console.WriteLine(values[i].Surname);
                Console.WriteLine(values[i].Name);
                Console.WriteLine(values[i].Phone);
            }
            return values;
        }
        public string Kekw()
        {
            return("ti ebalsa?");
        }
    }
}
