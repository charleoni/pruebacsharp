using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WSLibrary.Models.Request
{
    public class EditorialRequest
    {
        public int Id { get; set; }
        public string NombreEditorial { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public int MaxLibrosRegistrados { get; set; }

        public Byte estado { get; set; }
        public  int createdAt { get; set; }
        public DateTime createdAtdate { get; set; }
        public int updatedAt { get; set; }
        public DateTime updatedAtdate { get; set; }



}
}
