SHELL:=/bin/bash
include .env

.PHONY: all upload-media

all: upload-media

upload-media:
	AWS_PROFILE=$(AWS_PROFILE) aws s3 sync --endpoint=$(AWS_ENDPOINT) --acl public-read media $(MEDIA_BUCKET)
