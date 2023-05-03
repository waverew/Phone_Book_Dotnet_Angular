using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Phone_Book_Dotnet_Angular.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class ValuesController : ControllerBase
    {

        Program program = new Program();

        private readonly ILogger<ValuesController> _logger;
        public ValuesController(ILogger<ValuesController> logger)
        {
            _logger = logger;
        }
        // GET: api/<ValuesController>
        [HttpGet]
        public List<Values> Get()
        {
            return program.GetList();

        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] Values value)
        {
            Console.WriteLine("succ post request");
            program.AddPhone(value);
        }

        // PUT api/<ValuesController>/:surname
        [HttpPut("{index}")]
        public void Put(int index, [FromBody] Values value)
        {
            program.EditPhone(index, value);

        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Console.WriteLine(id);
            program.RemovePhone(id);

        }
    }
}
