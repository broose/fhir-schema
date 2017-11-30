patch: 
	$(eval MSG ?= "Patch")
	git add ./
	npm version patch --force --message "$(MSG) %s"
	git push origin master
	npm publish
minor: 
	$(eval MSG ?= "Minor")
	git add ./
	npm version minor --force --message "$(MSG) %s"
	git push origin master
	npm publish
