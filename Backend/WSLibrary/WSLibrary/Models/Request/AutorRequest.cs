using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSLibrary.Models.Request
{
    public class AutorRequest
    {
        public int Id { get; set; }
        public string nombreAutor { get; set; }
        public String Ciudad { get; set; }
        public string email { get; set; }
        public DateTime FechaNace { get; set;}
        public byte estado { get; set; }
        public int CreatedAt { get; set; }
        public DateTime CreatedAtdate { get; set; }
        public DateTime updatedAt { get; set; }
        public DateTime updatedAtdate { get; set; }

    }
}
