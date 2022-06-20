FROM squidfunk/mkdocs-material:8.3.6

RUN pip install jieba

COPY search_index.py /usr/local/lib/python3.9/site-packages/mkdocs/contrib/search/
