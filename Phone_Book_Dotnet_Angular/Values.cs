using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Unicode;

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
        public Program()
        {
            using FileStream jsond = File.OpenRead(this.phonebook);
            //var values = JsonSerializer.Deserialize<List<Values>>(jsond);

            Console.WriteLine("Program constructor");
            this.state = System.Text.Json.JsonSerializer.Deserialize<List<Values>>(jsond);
            jsond.Close();
        }
        public void AddPhone(Values phone)
        {
        using FileStream jsond = File.OpenWrite(this.phonebook);
        this.state.Add(phone);
            var options1 = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.BasicLatin, UnicodeRanges.Cyrillic),
                WriteIndented = true
            };
            Console.WriteLine(this.state.Count);
            Console.WriteLine("Add(phone).Count");
            jsond.Close();
            File.WriteAllText(this.phonebook, System.Text.Json.JsonSerializer.Serialize(this.state, options1));
        }
        public void RemovePhone(int id)
        {
            using FileStream jsond = File.OpenWrite(this.phonebook);
            Console.WriteLine("RemovePhone() hit");
            jsond.Close();
            this.state.RemoveAt(id);
            var options1 = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.BasicLatin, UnicodeRanges.Cyrillic),
                WriteIndented = true
            };
            File.WriteAllText(this.phonebook, System.Text.Json.JsonSerializer.Serialize(this.state, options1));
        }
        public void EditPhone(int id, Values contact)
        {
            using FileStream jsond = File.OpenWrite(this.phonebook);
            jsond.Close();
            this.state[id] = contact;
            Console.WriteLine(id);
            Console.WriteLine("id v jsone");
            var options1 = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.BasicLatin, UnicodeRanges.Cyrillic),
                WriteIndented = true
            };
            File.WriteAllText(this.phonebook, System.Text.Json.JsonSerializer.Serialize(this.state, options1));

        }

        public List<Values> GetList()
        {
            Console.WriteLine(this.state.Count);
            Console.WriteLine("Get(phone).Count");
            return this.state;
        }
    }
}
