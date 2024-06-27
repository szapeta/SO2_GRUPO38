# SO2_GRUPO38


Instalaciones:

system tap
sudo apt-get install systemtap systemtap-runtime


sudo apt-get update
sudo apt-get upgrade
sudo apt-get install libmysqlclient-dev


ejecucion:
gcc -o lector lector.c -lmysqlclient

sudo stap monitor.stp | ./lector
