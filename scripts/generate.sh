if [ $# -eq 0 ]
  then
    echo "Enter name of Module/Controller/Service"
    exit 1
fi


echo "Generating Module"
nest g module $1

echo "Generating Controller"
nest g controller $1

echo "Generating Service"
nest g service $1