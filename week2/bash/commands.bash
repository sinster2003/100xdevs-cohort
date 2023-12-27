# present working directory ---> prints the current directory
pwd

# change directory ---> navigation
cd

# change a particular directory
cd home

# change multiple directories
cd home/sinster2003 # use tab to autocomplete

# reverts back the directory
cd ..

# revert multiple directories
cd ../..

# list all directories (current)
ls

# lists previous directory
ls ..

# details of directories
ls -l text-files

# extra details of directories and subdirectories inside them
ls -R text-files

# lists last modifies files or folders first
ls -t text-files

# combining lt wgich gives details in the newest modifies first order
ls -lt text-files

# lists secret files .env 
ls -la text-files

# list secret files with all details
ls -lRa text-files

# lists in reverse order
ls -lr text-files

# lists based on size of files and folders
ls -s text-files

# search recursively for different files with file name and extension
ls -lR | grep .js

# wildcard listing to list and search the above non-recursively 
ls *.js

# make directory 
mkdir test

# combining mkdir and cd
mkdir python-files && cd python-files

# make recursive directories
mkdir -p perl/files

# create a file
touch index.html

# to view content in a file
cat index.html

# to concatenate content by overwriting old content
cat > index.html

# to append content 
cat >> index.html

# vi editor ---> changes the content of the file from the terminal
vi 

i # ---> insert mode
# write the content
esc # to exit insert mode
:wq # for quitting vim with modified file
:q # for quitting vim with no modifications
:!node index.js # to run js files
:q! # force quit
:! # start with this to run external commands like 
:!node 
:!python3

# move files in different directories
mv index.txt text-files # moves index.txt to text-files folder

# renames the file from hello to hi
mv hello.py hi.py

# cp file to directory 
cp index.py test-files # copies .py file into test-files folder

# cp directory to directory 
cp -r js-files test-files # copies js-files folder into test-files folder

# deleting files
rm index.py

# deleting folders
rm -r python-files
