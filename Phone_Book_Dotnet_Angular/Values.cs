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
        public string Main()
        {
            using FileStream jsond = File.OpenRead(this.phonebook);
            var values = JsonSerializer.Deserialize<List<Values>>(jsond);
            Console.WriteLine(values[0].Phone);
            return values[0].Name;
        }
        public string Kekw()
        {
            return("ti ebalsa?");
        }
    }
}
