### vue-sample2

node -v 
v16.14.2

npm -v
8.5.0

** node 버전 변경 필요할 때 nvm 설치 후 node, npm 버전 변경 후 사용
### NVM설치
$ sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash

### 확인
$ nvm ls
-bash: nvm: command not found

### nvm: command not found 확인되면 vi 열어서 아래 내용 삽입
vi ~/.bash_profile

insert

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

:wq

### 재시작
source ~/.bash_profile

### 확인
$ nvm ls
->       system
node -> stable (-> N/A) (default)
iojs -> N/A (default)

### node 설치
$ nvm install 버전

### npm 설처
$ npm install -g npm@버전


