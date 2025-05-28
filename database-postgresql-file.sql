CREATE TABLE "article"(
    "id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "thumbnail" VARCHAR(255) NOT NULL,
    "category_id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "article" ADD PRIMARY KEY("id");
ALTER TABLE
    "article" ADD CONSTRAINT "article_slug_unique" UNIQUE("slug");
CREATE TABLE "category"(
    "id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "thumbnail" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "category" ADD PRIMARY KEY("id");
ALTER TABLE
    "category" ADD CONSTRAINT "category_slug_unique" UNIQUE("slug");
CREATE TABLE "like"(
    "id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
CREATE INDEX "like_profile_id_article_id_index" ON
    "like"("profile_id", "article_id");
ALTER TABLE
    "like" ADD PRIMARY KEY("id");
CREATE TABLE "comment"(
    "id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
ALTER TABLE
    "comment" ADD PRIMARY KEY("id");
CREATE TABLE "bookmark"(
    "id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NULL
);
CREATE INDEX "bookmark_profile_id_article_id_index" ON
    "bookmark"("profile_id", "article_id");
ALTER TABLE
    "bookmark" ADD PRIMARY KEY("id");
CREATE TABLE "notification"(
    "id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "sender_id" INTEGER NOT NULL,
    "article_id" INTEGER NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL,
    "date_created" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "notification" ADD PRIMARY KEY("id");
CREATE TABLE "profile"(
    "id" INTEGER NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "biography" TEXT NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "job_title" VARCHAR(255) NOT NULL,
    "role" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "profile" ADD PRIMARY KEY("id");
ALTER TABLE
    "notification" ADD CONSTRAINT "notification_receiver_id_foreign" FOREIGN KEY("receiver_id") REFERENCES "profile"("id");
ALTER TABLE
    "article" ADD CONSTRAINT "article_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "category"("id");
ALTER TABLE
    "like" ADD CONSTRAINT "like_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "comment" ADD CONSTRAINT "comment_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "comment" ADD CONSTRAINT "comment_article_id_foreign" FOREIGN KEY("article_id") REFERENCES "article"("id");
ALTER TABLE
    "comment" ADD CONSTRAINT "comment_article_id_foreign" FOREIGN KEY("article_id") REFERENCES "article"("id");
ALTER TABLE
    "notification" ADD CONSTRAINT "notification_article_id_foreign" FOREIGN KEY("article_id") REFERENCES "article"("id");
ALTER TABLE
    "like" ADD CONSTRAINT "like_article_id_foreign" FOREIGN KEY("article_id") REFERENCES "article"("id");
ALTER TABLE
    "bookmark" ADD CONSTRAINT "bookmark_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "article" ADD CONSTRAINT "article_profile_id_foreign" FOREIGN KEY("profile_id") REFERENCES "profile"("id");
ALTER TABLE
    "notification" ADD CONSTRAINT "notification_sender_id_foreign" FOREIGN KEY("sender_id") REFERENCES "profile"("id");