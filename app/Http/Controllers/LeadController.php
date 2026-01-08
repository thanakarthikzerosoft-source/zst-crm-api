<?php

namespace App\Http\Controllers;

use App\Models\LeadDetail;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    // GET all leads
    public function index()
    {
        return LeadDetail::all();
    }

    // CREATE lead
    public function store(Request $request)
    {
        return LeadDetail::create($request->all());
    }

    // VIEW single lead
    public function show($id)
    {
        return LeadDetail::findOrFail($id);
    }

    // UPDATE lead
    public function update(Request $request, $id)
    {
        $lead = LeadDetail::findOrFail($id);
        $lead->update($request->all());
        return $lead;
    }

    // DELETE lead
    public function destroy($id)
    {
        LeadDetail::findOrFail($id)->delete();
        return ['message' => 'Lead deleted'];
    }
}
