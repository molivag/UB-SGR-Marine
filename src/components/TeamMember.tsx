function Member() {
  
  return (
    <div className="bg-blue-50 grid grid-row-2 gap-4">
      <div className="mx-auto py-3">
        <img
        className="w-full sm:w-50 md:w-75 lg:w-80 xl:w-100 h-auto object-cover rounded-4xl"

          // className=" rounded-full w-64 h-64 "
          src="../../public/img/foto_HelenaVela.jpg"
          alt="Fotografia de Miembro 1"
        />
      </div>
      <div className="col-4 ">
        <h3>NameMember</h3>
        <p>
          <em>Category</em>: ssss
        </p>
        <p>
          <em>Department</em>: ssss
        </p>
        <p>
          <em>Research Group</em>:ssssss
        </p>
        <p>
          <em>e-mail</em>: sssssss
        </p>
        <p>
          <a href="">OrcID</a>
          <a href="">Google Scholar</a>
        </p>
        <p>
          <em>Bio:</em>:
        </p>
      </div>
    </div>
  );
}

export default Member;
