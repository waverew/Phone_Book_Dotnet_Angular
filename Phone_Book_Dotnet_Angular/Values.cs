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
        public async Task Main(string b)
        {
            string phonebook = "../Phonebook.json";
            using FileStream jsond = File.OpenRead(phonebook);
            Values? values = await JsonSerializer.DeserializeAsync<Values>(jsond);
            Console.WriteLine(values);
        }
        public void Kekw()
        {
            Console.WriteLine("ti ebalsa?");
        }
    }
}
