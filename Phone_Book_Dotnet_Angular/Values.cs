using Microsoft.CodeAnalysis.CSharp.Syntax;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Unicode;

namespace Phone_Book_Dotnet_Angular
{

    public class Contact
    {

        public string Surname { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
    }
    public class PhoneBookDB
    {
        public string phonebook = "./Phonebook.json";
        public List<Contact> state;
        public PhoneBookDB()
        {
            using FileStream jsond = File.OpenRead(this.phonebook);
            this.state = System.Text.Json.JsonSerializer.Deserialize<List<Contact>>(jsond);
            jsond.Close();
        }
        public void AddPhone(Contact phone)
        {
            this.state.Add(phone);
            var options1 = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.BasicLatin, UnicodeRanges.Cyrillic),
                WriteIndented = true
            };
            var sortedJson = SortContacts(this.state);
            File.WriteAllText(this.phonebook, System.Text.Json.JsonSerializer.Serialize(sortedJson, options1));
        }
        public void RemovePhone(int id)
        {
            this.state.RemoveAt(id);
            var options1 = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.BasicLatin, UnicodeRanges.Cyrillic),
                WriteIndented = true
            };
            var sortedJson = SortContacts(this.state);
            File.WriteAllText(this.phonebook, System.Text.Json.JsonSerializer.Serialize(sortedJson, options1));
        }
        public void EditPhone(int id, Contact contact)
        {
            this.state[id] = contact;
            var options1 = new JsonSerializerOptions
            {
                Encoder = JavaScriptEncoder.Create(UnicodeRanges.BasicLatin, UnicodeRanges.Cyrillic),
                WriteIndented = true
            };
            var sortedJson = SortContacts(this.state);
            File.WriteAllText(this.phonebook, System.Text.Json.JsonSerializer.Serialize(sortedJson, options1));

        }
        private List<Contact> SortContacts(List<Contact> list)
        {

            return list.OrderBy(p => p.Surname, StringComparer.Create(new System.Globalization.CultureInfo("ru-RU"), false)).ToList();
        }

        public List<Contact> GetList()
        {
            return this.state;
        }
    }
}
