using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
        public List<Values> state;
        //using FileStream jsond = File.Open(this.phonebook);
        public Program()
        {
            using FileStream jsond = File.OpenRead(this.phonebook);
            //var values = JsonSerializer.Deserialize<List<Values>>(jsond);

            Console.WriteLine("Program constructor");
            this.state = System.Text.Json.JsonSerializer.Deserialize<List<Values>>(jsond);
            jsond.Close();
            for (int i = 0; i < this.state.Count; i++)
            {
                Console.WriteLine(this.state[i].Surname);
                Console.WriteLine(this.state[i].Name);
                Console.WriteLine(this.state[i].Phone);
            }
            
        }
        public void AddPhone(Values phone)
        {
        using FileStream jsond = File.OpenWrite(this.phonebook);
        this.state.Add(phone);
            Console.WriteLine(this.state.Count);
            Console.WriteLine("Add(phone).Count");

        // jsond.Write()
       // Console.WriteLine(JsonSerializer.Serialize(this.state));
           File.WriteAllText(this.phonebook, System.Text.Json.JsonSerializer.Serialize(this.state));

        }

        public List<Values> GetList()
        {
            Console.WriteLine(this.state.Count);
            Console.WriteLine("Get(phone).Count");
            return this.state;
        }
       // public List<Values> Main()
        //{
            /*using FileStream jsond = File.OpenRead(this.phonebook);
            var values = JsonSerializer.Deserialize<List<Values>>(jsond);
            for (int i = 0; i < values.Count; i++)
            {
                Console.WriteLine(values[i].Surname);
                Console.WriteLine(values[i].Name);
                Console.WriteLine(values[i].Phone);
            }
            return values;
        }*/
       
    }
}
