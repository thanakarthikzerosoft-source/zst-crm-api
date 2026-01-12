<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('lead_details', function (Blueprint $table) {
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('lead_assignee')->nullable();
            $table->string('lead_status')->nullable();
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->string('company_name')->nullable();
            $table->string('industry_type')->nullable();
            $table->string('lead_source')->nullable();
            $table->string('website')->nullable();
            $table->string('street')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('zip_code')->nullable();
            $table->text('description')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('lead_details', function (Blueprint $table) {
            $table->dropColumn([
                'first_name',
                'last_name',
                'lead_assignee',
                'lead_status',
                'mobile',
                'email',
                'company_name',
                'industry_type',
                'lead_source',
                'website',
                'street',
                'city',
                'state',
                'country',
                'zip_code',
                'description',
            ]);
        });
    }
};

