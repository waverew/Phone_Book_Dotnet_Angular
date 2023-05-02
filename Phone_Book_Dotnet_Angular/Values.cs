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
        public string ChangeEncoding ()
        {   

            string _surname = this.Surname;
            string _name = this.Name;
            string _phone = this.Phone;
            return "";
            // change engoding of strings to 
        }
    }
    public class Program
    {
        public string phonebook = "./Controllers/Phonebook.json";
        public List<Values> state;
        //using FileStream jsond = File.Open(this.phonebook);
        

        // TODO: fix FS RW error
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
            // this.state.Remove();
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
