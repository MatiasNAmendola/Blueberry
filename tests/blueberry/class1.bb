class Person
  @name
  @age = 18

  def SayHi
    echo(@name)
  end
end

mike = new Person()
mike.SayHi()
echo(mike.age)
